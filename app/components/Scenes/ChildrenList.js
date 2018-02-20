import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import BasicScene from './BasicScene';
import ListItem from '../Components/ListItem';

class ChildrenList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.participants);
  }

  renderRow(item) {
    return <ListItem item={item} />;
  }

  render() {
    return (
      <BasicScene header="Full Children List">
        <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
      </BasicScene>
    );
  }
}

const mapStateToProps = state => {
  return { participants: state.participants };
};

export default connect(mapStateToProps)(ChildrenList);
