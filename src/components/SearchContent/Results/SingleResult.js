import React from 'react';
import 'antd/dist/antd.css';
import { Badge, Icon } from 'antd';
import './SingleResult.css';
import { getFaves, postFave, deleteFave } from '../../../json-interactions/json-calls';

export default class SingleResult extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            type: "star-o",
            id: undefined
        };
        this.LoadFaves();
    }

    LoadFaves = () => {
        getFaves()
        .then ((favesList) => {
            console.log('these are the faves', favesList);
            favesList.forEach(fave => {
                for(let key in fave) {
                    // console.log('fave.key', fave.key);
                    // console.log('key prop is', key);
                    if ( fave.key === this.props.jobKey) {
                        console.log('fave.id is', fave.id);
                        this.setState({
                            id : fave.id,
                            type: "star",
                            selected: true
                        })
                    }
                }
            });
        })
    }

    SaveFave = () => {

        let jobKey = this.props.jobKey;

        if (this.state.selected) {
            console.log('unfavoriting job id', jobKey);
            this.setState({
                selected: false,
                type: "star-o"
            });
            deleteFave(this.state.id);
        } else {
            console.log('favoriting job', jobKey);
            this.setState({
                selected: true,
                type: "star"
            });
            postFave(jobKey)
            .then((id) => {
                this.setState({id});
            });
    };
};

    render() {

        let skills = this.props.skills;
        
        let skillBadges = skills.map((skill, index) => {

          return <Badge key={index} className="badge-skill" count={skill} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}} />

        });



        return (
            <div key={this.props.jobKey} className="jobResult">
                <hr />
                <div id={this.state.id} className="jobTitle">
                    <a onClick={this.SaveFave}><Icon type={this.state.type} /></a>
                    <p className="title">{this.props.title}</p>
                    <Badge className="badge-availability" count={this.props.availability} />
                    <p className="payRate">{this.props.payRate}</p>
                </div>
                <div className="jobCompany">
                    <p className="company"><a href="/">{this.props.company}</a></p>
                    <p className="location"><a href="/">{this.props.location}</a></p>
                </div>
                <div className="jobReplies">
                    <p>Reply rate: <strong>{this.props.replyRate}</strong></p>
                </div>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <div className="jobTags">
                    {skillBadges}
                </div>
            </div>
        )

    }

}