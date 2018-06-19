import React from 'react';
import 'antd/dist/antd.css';
import { Badge, Icon } from 'antd';
import './SingleResult.css';

export default class SingleResult extends React.Component {
    state = {
        selected: false,
    }


    SaveFave = () => {
            //onClick, if star is selected (True)
        if (this.state.selected) {
        //then favorite job by
            console.log('unfavoriting the job');
            // setState of icon to star
            this.setState({
                selected: false
            })
            // job is added to db.json;'/.
        } else {
        //else run favorite job function
            console.log('favoriting the job');
            // setState of Icon to star-o
            this.setState({
                selected: true
            })
            // Job is deleted from db.json
        }
    }


    starStuff = () => {
        if(this.state.selected){
            return(
                <Icon type="star" />
            )
        }else{
            return(
                <Icon type="star-o" />
            )
        }
    }

    render() {

        let skills = this.props.skills;
        
        let skillBadges = skills.map((skill, index) => {

          return <Badge key={index} className="badge-skill" count={skill} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}} />

        });

        return (
            <div key={this.props.jobKey} className="jobResult">
                <hr />
                <div className="jobTitle">
                    <a onClick={this.SaveFave}>{this.starStuff()}</a>
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