import './App.css';
import React from 'react';

const studentData = [
    {
        name: "John", attendance: 88, total: 100, id: "Student_1"
    }, {
        name: "Jane", attendance: 68, total: 100, id: "Student_2"
    }, {
        name: "Jack", attendance: 70, total: 100, id: "Student_3"
    }
]
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log("Insider render app", this.state.pageName);
        return (
            <center style={ { margin: 200 } }>
                <h1>
                    Attendance Report
                </h1>
                <ol>
                    {/* { studentData.map(s => <Student info={ s } />) } */}
                    {/* { studentData.map(s => <Student key={s.id} info={ s } />) } */}
                    { studentData.map((s, index) => <Student key={index} info={ s } />) }
                </ol>
            </center>
        )
    }
}

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.info
        }
    }
    render() {
        return (
            <div>
                <h1>
                    { `${this.state.data.name} => ${this.state.data.attendance}/${this.state.data.total}` }
                </h1>
            </div>
        );
    }
}

export default App;
