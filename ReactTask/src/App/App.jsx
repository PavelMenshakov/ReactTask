import React from 'react';

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {posts: [], newPost: { title: '', text: '', author:''}};
	}
	
	getPostsHandler(event) {
		fetch('http://localhost:3000/posts').then((res) => {
			return res.json();
		}).then((data) => {
			let postsArray = [];
			for (var i = 0; i < data.length; i++) {
				postsArray.push(<div>
					<span>{data[i]['_id']}</span>
					<span>{data[i]['title']}</span>
					<span>{data[i]['text']}</span>
					<span>{data[i]['author']}</span>
				</div>);
			}
			
			this.setState({posts: postsArray});
		});
		event.preventDefault();
	}
	
	submitHandler(event) {
		let headers = new Headers();
			headers.append("Content-Type", "application/x-www-form-urlencoded");
		
		fetch('http://localhost:3000/posts',  {
			method: "POST",
			headers,
			body: 'title=' + this.state.newPost.title + '&text=' + this.state.newPost.text + '&author=' + this.state.newPost.author
		}).then((res) => {
			return res.json();
		}).then((data) => {
			console.log(data);
		});
		event.preventDefault();
	}
	
	handleTitleChange(event) {
		let post = this.state.newPost;
		post.title = event.target.value;
		this.setState({newPost: post});
	}
	
	handleTextChange(event) {
		let post = this.state.newPost;
		post.text = event.target.value;
		this.setState({newPost: post});
	}
	
	handleAuthorChange(event) {
		let post = this.state.newPost;
		post.author = event.target.value;
		this.setState({newPost: post});
	}

	render() {
		return (
		<div>
			<h2>Main</h2>
			<div>{this.state.posts}</div>
			<input type="button" value="Get Posts" onClick={this.getPostsHandler.bind(this)}/>
			<form onSubmit={this.submitHandler.bind(this)}>
				<label>
				  Title:
				  <input type="text" value={this.state.newPost.title} onChange={this.handleTitleChange.bind(this)}/>
				</label>
				<label>
				  Text:
				  <input type="text" value={this.state.newPost.text} onChange={this.handleTextChange.bind(this)}/>
				</label>
				<label>
				  Author:
				  <input type="text" value={this.state.newPost.author} onChange={this.handleAuthorChange.bind(this)}/>
				</label>
				<input type="submit" value="Submit" />
			  </form>
			  <div>{this.props.children}</div>
		</div>);
	}
};

export default App;
