/**
 * @author Akash Tripathi
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main admin dashboard page.
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.scss';
import Header from './components/header/header';
import NavigationMenu from './components/navigation/navigation';
import Footer from './components/footer/footer';
import StatTile from './components/stat-tile/stat-tile';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statTileOptions: []
        };
    }
    componentDidMount() {

        var statTileOptions = [{
            theme: 'bg-aqua',
            icon: 'ion-bag',
            subject: 'New Orders',
            stats: '150',
            link: '#'
        }, {
            theme: 'bg-green',
            icon: 'ion-stats-bars',
            subject: 'Bounce Rate',
            stats: '53%',
            link: '#'
        }, {
            theme: 'bg-yellow',
            icon: 'ion-person-add',
            subject: 'User Registrations',
            stats: '44',
            link: '#'
        }, {
            theme: 'bg-red',
            icon: 'ion-pie-graph',
            subject: 'Unique Visitors',
            stats: '65',
            link: '#'
        }];

        this.setState({
            statTileOptions: statTileOptions
        }, () => {
            console.log(this.state.statTileOptions);
        });
    };

    componentDidUpdate() {

        $('.box ul.nav a').on('shown.bs.tab', function () {
            area.redraw();
            donut.redraw();
            console.log("graph drawn")
        });

    };
    render() {
        var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
            return (
                <StatTile
                    key={"rowThree" + iterator}
                    width={3}
                    icon={options.icon}
                    link={options.link}
                    stats={options.stats}
                    subject={options.subject}
                    theme={options.theme} />
            )
        });
        return (
            <div className="wrapper">
                <Header />

                <NavigationMenu />

                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard
                    <small>Control panel</small>
                        </h1>
                        {/*<ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                        </ol>*/}
                        {/* <ControlPanel /> */}
                    </section>

                    <section className="content">
                        <div className="row">
                            {statTileWidgets}
                        </div>
                        <div className="row">
                            <section className="" >
                                <p>Hi admin</p>
                            </section>
                        </div>
                    </section>

                </div>

                <Footer />

                {/*<ControlsMenu />*/}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));