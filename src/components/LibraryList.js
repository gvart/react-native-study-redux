import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library}/>
    }

    render() {
        return (
          <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.id.toString()}
          />
        );
    }
}


const mapStateToProps = state => {
    //return { dataToShow: state.libraries}
    return { libraries: state.libraries}
};

//function that returns function
export default connect(mapStateToProps)(LibraryList);