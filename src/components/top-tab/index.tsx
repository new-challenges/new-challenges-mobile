/** 
  Example:
    <TopTab initIndex={initIndex} onTabPress={onTabPress}>
      <TopTabContent route="Home" title="Home">
        <Text>Home</Text>
      </TopTabContent>
      <TopTabContent route="Setting" title="Cài đặt">
        <Text>Cài đặt</Text>
      </TopTabContent>
      <TopTabContent route="Product" title="Sản phẩm">
        <Text>Sản phẩm</Text>
      </TopTabContent>
    </TopTab>
**/

import React, {memo, useEffect} from 'react';
import isEquals from 'react-fast-compare';
import {StatusBar, StyleSheet, Dimensions, View, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {TopTabChildProps, TopTabProps} from './type';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  labelTab: {
    color: '#F99D33',
    fontSize: 12,
    lineHeight: 12,
    textTransform: 'none',
  },
});

export const TopTabContent = (props: TopTabChildProps) => {
  return <View>{props}</View>;
};

const initialLayout = {width: Dimensions.get('window').width};

const TopTabComponent = (props: TopTabProps) => {
  const {initIndex, children, onTabPress, ...rest} = props;

  const [routes, setRoutes] = React.useState([]);
  const [scene, setScene] = React.useState({});
  const [index, setIndex] = React.useState(0);

  const settingRoutes = (list: TopTabChildProps[]) => {
    const data: any = [];
    if (list.length > 0) {
      list.map((item: TopTabChildProps) =>
        data.push({key: item.route, title: item.title}),
      );
    }
    return data;
  };

  const settingScene = (list: TopTabChildProps[]) => {
    let data = {};
    if (list.length > 0) {
      data = list.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.route]: () => (
            <View
              style={{
                flex: 1,
                marginHorizontal: 16,
                marginVertical: 25,
                backgroundColor: 'pink',
              }}>
              {cur.children}
            </View>
          ),
        }),
        {},
      );
    }
    return data;
  };

  useEffect(() => {
    const data: any[] = [];

    setIndex(initIndex);
    React.Children.forEach(children, (element: any) => {
      data.push(element.props);
    });
    setRoutes(settingRoutes(data));
    setScene(settingScene(data));
  }, [children]);

  // This is our placeholder component for the tabs
  // This will be rendered when a tab isn't loaded yet
  // You could also customize it to render different content depending on the route
  const LazyPlaceholder = () => (
    <View style={styles.scene}>
      <Text>Loading…</Text>
    </View>
  );

  const renderLazyPlaceholder = () => <LazyPlaceholder />;

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={SceneMap(scene)}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      lazy
      renderLazyPlaceholder={renderLazyPlaceholder}
      renderTabBar={(props: any) => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: '#F99D33'}}
          style={{backgroundColor: '#F99D33'}}
          labelStyle={styles.labelTab}
          inactiveColor={'#F99D33'}
          onTabPress={onTabPress}
        />
      )}
      {...rest}
    />
  );
};

export const TopTab = memo(TopTabComponent, isEquals);
