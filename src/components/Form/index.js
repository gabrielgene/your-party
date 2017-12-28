import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Request from './Request';
import Data from './Data';
import './style.css';

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        services: [],
        amount: '',
        when: '',
        addInfo: '',
      },
      data: {
        name: '',
        place: '',
        phone: '',
        email: '',
      },
      activeIndex: 0,
    }
  }

  handleChangeRequest = (e, { name, value }) => this.setState({
    request: {
      ...this.state.request,
      [name]: value,
    }
  });

  handleChangeData = (e, { name, value }) => this.setState({
    data: {
      ...this.state.data,
      [name]: value,
    }
  });

  handleSubmit = () => console.log(this.state);

  handleSubmitNextIndex = () => this.setState({ activeIndex: 1 });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { request, data, activeIndex } = this.state;
    const { services, amount, when, addInfo } = request;
    const { name, place, phone, email } = data;

    const panes = [
      {
        menuItem: 'Seu evento', render: () => (
          <Tab.Pane>
            <Request
              onChange={this.handleChangeRequest}
              onSubmit={this.handleSubmitNextIndex}
              services={services}
              amount={amount}
              when={when}
              addInfo={addInfo}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Seus dados', render: () => (
          <Tab.Pane>
            <Data
              onChange={this.handleChangeData}
              onSubmit={this.handleSubmit}
              name={name}
              place={place}
              phone={phone}
              email={email}
            />
          </Tab.Pane>
        )
      },
    ]

    return (
      <div className="Form">
        <Tab
          panes={panes}
          menu={{ attached: 'top' }}
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
        />
      </div>
    )
  }
}
