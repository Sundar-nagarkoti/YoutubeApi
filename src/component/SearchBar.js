import React from 'react';

class SearchBar extends React.Component{
    state={term:''};

    render(){
        return <div className='ui search segment'>
            <form className='ui form'
                onSubmit={(e)=>{
                e.preventDefault();
                this.props.Searched(this.state.term)
            }}>
                <div className='field'>
                <lable>Video Search</lable>
                <input type='text' value={this.state.term}
                onChange={(e)=>{
                    this.setState({term:e.target.value});
                }}
                />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;