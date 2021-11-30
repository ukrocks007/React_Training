class Student extends Component {
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
                    { `${data.name} => ${data.attendance}/${data.total}` }
                </h1>
            </div>
        );
    }
}

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.studentData || []
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Attendance Report
                </h1>
                <ol>
                    { this.state.data.map(s => <Student info={ s } />) }
                    {/* { this.state.data.map(s => <Student key={s.id} info={ s } />) } */}
                    {/* { this.state.data.map((s, index) => <Student key={index} info={ s } />) } */ }
                </ol>
            </div>
        );
    }
}

const studentData = [
    {
        name: "John", attendance: 88, total: 100, id: "Student_1"
    }, {
        name: "Jane", attendance: 68, total: 100, id: "Student_2"
    }, {
        name: "Jack", attendance: 70, total: 100, id: "Student_3"
    }
]

ReactDOM.render(
    <Attendance studentData={ studentData } />,
    document.getElementById('root')
);