import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSort } from '../../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class SortLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <span className="active">{children}</span>;
        }

        return <span className="text-muted" onClick={onClick}>{children}</span>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.sort === state.sort
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setSort(ownProps.sort))
    };
}
