import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import NativeSelect from '@material-ui/core/NativeSelect';

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item xs={3}>
          <Button className="create-button" variant="contained" style={{ backgroundColor: 'mediumseagreen', color: 'white' }}>
            + Create
          </Button>
        </Grid>
        <Grid item xs={7}>
          <div style={{ position: 'absolute', right: '30px' }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <NativeSelect style={{ marginLeft: '20px' }}>
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </div>
        </Grid>
      </div>
    );
  }
}
