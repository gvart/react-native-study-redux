import React, {Component} from 'react';
import { NativeModules, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from  './reducers'
import {Header} from "./components/common";
import LibraryList from "./components/LibraryList";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <View style={{flex: 1}}>
            <Header name={'Technical stack'}/>
            <LibraryList />
          </View>
        </Provider>
    );
  }
}
