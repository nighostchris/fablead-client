import React from 'react';

export const BaseContext = React.createContext('callback');

export class BaseProvider extends React.Component {
  state = {
    callback: null,
  }

  render() {
    const { callback, children } = this.state;

    return (
      <BaseContext.Provider value={callback}>
        {children}
      </BaseContext.Provider>
    );
  }
}

export function withCallback(Component) {
  return class _ extends Component {
    render () {
      return (
        <BaseContext.Consumer>
          {value => <Component {...this.props} callback={value} />}
        </BaseContext.Consumer>
      )
    }
  }
}
