import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {

    render () {
        // this.props.posts are comming in store.js
        return (
            <div className="photo-grid">
                {this.props.posts.map( (post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
            </div>
        );
    }
}