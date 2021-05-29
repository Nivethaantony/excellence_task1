import React from 'react';
import axios from 'axios';
class CallApi extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/typicode/demo/posts
      `)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div>
                <h3>API Call</h3>
                <ul>
                    {this.state.posts.map(post => <li>{post.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default CallApi;