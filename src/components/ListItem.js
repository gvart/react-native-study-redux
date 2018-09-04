import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import {CardSection} from "./common";
import { connect } from 'react-redux';
import * as actions from '../actions';


class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const library = this.props.library.item;
        const expanded = this.props.expanded;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1}}>
                        {library.description}
                        </Text>
                </CardSection>
            )
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
              <View>
                <CardSection>
                    <Text style={titleStyle}>{title}</Text>
                </CardSection>
                  {this.renderDescription()}
              </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};


const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded }
};
export default connect(mapStateToProps, actions)(ListItem);