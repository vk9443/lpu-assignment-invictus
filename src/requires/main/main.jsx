import React, { Component } from 'react';
import { Table } from '../table/table';
import './main.scss';

class Main extends Component {
    state = { 
        d:"",
        value:0,
        w:[],
        f:new Map(),
        s: false
    }
    componentDidMount(){
        const link = ()=>{
            let f=new Map();
            const {w} = this.state;
            w.map(newd => (
            f.has(newd) ? f.set(newd, f.get(newd)+1) : f.set(newd, 1)
            ));
            const res = new Map([...f.entries()].sort((a, b) => b[1] - a[1]));
            return res;
        }

        fetch('https://raw.githubusercontent.com/invictustech/test/main/README.md').then((response) => response.text()).then((text) => {
            this.setState({ d: text.toLowerCase() });
            this.setState({ w: this.state.d.split(/[^a-z]+/) });
            this.setState({ ...this.state, f: link()});
        });
    }

    render() { 
        let iv = this.state.value;
        const submitfunction = event => {
            event.preventDefault();
            this.setState({...this.state, value:iv, s:true})
        }

        const changefunction = event => {
            const { value } = event.target;
            iv = value;
        };
        
        return ( 
            <div className="homepage">
                <h1 className="headline">
                    Invictus Assignment
                </h1>
                
                <form onSubmit={submitfunction}>
                    <label htmlFor="input">Enter a number</label><br />
                    <input name="input" type="number" autoComplete="off" placeholder="" onChange={changefunction} required/>
                    <br />
                    <button type="submit" >Search</button>
                </form>
                {
                    this.state.s ? <Table f={this.state.f} val={this.state.value} /> : null
                }
            </div>
        );
    }
}

export default Main;