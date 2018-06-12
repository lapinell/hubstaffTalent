import React from 'react';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import './SingleResult.css';

export default class SingleResult extends React.Component {

    render() {

        let skills = this.props.skills;

        let skillBadges = skills.map((skill) => {

          return <Badge className="badge-skill" count={skill} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}} />

        });

        return (
            <div className="jobResult">
                <hr />
                <div class="jobTitle">
                    <p className="title">{this.props.title}</p>
                    <Badge className="badge-availability" count={this.props.availability} />
                </div>
                <div className="jobCompany">
                    <p className="company"><a href="#">{this.props.company}</a></p>
                    <p className="location"><a href="#">{this.props.location}</a></p>
                </div>
                <div className="jobReplies">
                    <p>Reply rate: <strong>{this.props.replyRate}</strong></p>
                </div>
                <div className="jobDescription">
                    <p>{this.props.description}</p>
                </div>
                <div className="jobTags">
                    {skillBadges}
                </div>
            </div>
        )

    }

}