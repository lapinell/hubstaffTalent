import React from 'react';
import 'antd/dist/antd.css';
import { Col, Input, Checkbox, Dropdown, Menu, Button, message, Icon, Tag, Tooltip } from 'antd';
// import ChipInput from 'material-ui-chip-input'
import FilterCategory from './FilterSidebar/FilterCategory';
import './FilterSidebar.css';

class SkillsFilter extends React.Component {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
    };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type="plus" /> Add a Skill
          </Tag>
        )}
      </div>
    );
  }
}

let AvailabilityFilter = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
      
     return(
        <div>
            <Checkbox onChange={onChange}>Hourly</Checkbox>
            <Checkbox onChange={onChange}>Part-time (20hrs/wk)</Checkbox>
            <Checkbox onChange={onChange}>Full-time (40hrs/wk)</Checkbox>
        </div>
    );
}

let JobTypeFilter = () => {

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const jobTypeMenu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">Front end developement</Menu.Item>
          <Menu.Item key="2">Back end development</Menu.Item>
          <Menu.Item key="3">Dev Ops</Menu.Item>
        </Menu>
      );

    return (
        <Dropdown overlay={jobTypeMenu} trigger={['click']}>
            <Button style={{ marginLeft: 8 }}>
                Select a Job Type <Icon type="down" />
            </Button>
        </Dropdown>
    )

}

let ExperienceFilter = () => {

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const experienceMenu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">Junior</Menu.Item>
          <Menu.Item key="2">Mid-level</Menu.Item>
          <Menu.Item key="3">Senior</Menu.Item>
        </Menu>
      );

    return (
        <Dropdown overlay={experienceMenu} trigger={['click']}>
            <Button style={{ marginLeft: 8 }}>
                Select a Experience Level <Icon type="down" />
            </Button>
        </Dropdown>
    )

}

class CountriesFilter extends React.Component {
    state = {
      tags: [],
      inputVisible: false,
      inputValue: '',
      };
  
    handleClose = (removedTag) => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.setState({ tags });
    }
  
    showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    }
  
    handleInputChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }
  
    handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      this.setState({
        tags,
        inputVisible: false,
        inputValue: '',
      });
    }
  
    saveInputRef = input => this.input = input
  
    render() {
      const { tags, inputVisible, inputValue } = this.state;
      return (
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" /> Add a Country
            </Tag>
          )}
        </div>
      );
    }
}

class LanguagesFilter extends React.Component {
    state = {
      tags: [],
      inputVisible: false,
      inputValue: '',
      };
  
    handleClose = (removedTag) => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.setState({ tags });
    }
  
    showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    }
  
    handleInputChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }
  
    handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      this.setState({
        tags,
        inputVisible: false,
        inputValue: '',
      });
    }
  
    saveInputRef = input => this.input = input
  
    render() {
      const { tags, inputVisible, inputValue } = this.state;
      return (
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" /> Add a Language
            </Tag>
          )}
        </div>
      );
    }
}

  class FilterSidebar extends React.Component {

    render() {

        let filterAvail = <AvailabilityFilter />;
        let filterJobType = <JobTypeFilter />;
        let filterExperience = <ExperienceFilter />;
        let filterSkills = <SkillsFilter />
        let filterCountries = <CountriesFilter />
        let filterLanguages = <LanguagesFilter />

        return (
            <Col span={6} id="filterSidebar">
                <div id="filterSidebar-header">
                    <h2>Filters</h2>
                    <p id="clearAllFilters"><a href="#">Clear all filters</a></p>
                </div>
                <hr />
                <FilterCategory id="filter-skills" title="Skills" filters={filterSkills} />
                <FilterCategory id="filter-availability" title="Availability" filters={filterAvail} />
                <FilterCategory id="filter-job" title="Job Type" filters={filterJobType} />
                <FilterCategory id="filter-pay" title="Pay Rate" filters="range" />
                <FilterCategory id="filter-experience" title="Experience Level" filters={filterExperience} />
                <FilterCategory id="filter-countries" title="Countries" filters={filterCountries} />
                <FilterCategory id="filter-languages" title="Languages" filters={filterLanguages} />
            </Col>
        );
    };
}

export default FilterSidebar; 