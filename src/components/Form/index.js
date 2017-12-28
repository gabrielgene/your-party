import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Request from './Request';
import Data from './Data';
import Done from '../Done';
import { postRequest } from '../../utils';
import './style.css';

const defaultState = {
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
  done: false,
}

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState,
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

  handleSubmit = () => {
    const state = {
      request: this.state.request,
      data: this.state.data,
    }
    postRequest(state);

    this.setState({
      ...defaultState,
      done: true,
    });
  }

  handleNewRequest = () => this.setState({
    activeIndex: 0,
    done: false,
  })

  handleSubmitNextIndex = () => this.setState({ activeIndex: 1 });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { done, request, data, activeIndex } = this.state;
    const { services, amount, when, addInfo } = request;
    const { name, place, phone, email } = data;

    const panes = [
      {
        menuItem: '1. Seu evento', render: () => (
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
        menuItem: '2. Seus dados', render: () => (
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
        {done ?
          <Done onNewRequest={this.handleNewRequest} />
          :
          <Tab
            panes={panes}
            activeIndex={activeIndex}
          />
        }
      </div>
    )
  }
}
