import React, { Component } from 'react';
import {connect} from "react-redux";
import { fetchBattles, fetchLogs, resetBattle } from "../../store/actions";
import './style.css';
import SimpleTable from '../../components/table';
import ModalCustom from '../../components/modal';
import Confirm from '../../components/confirm';

const header = ['Battle #', 'Name', 'Status', 'Actions'];

class Games extends Component {
  state = {
    open: false, 
    BattleID: null,
    openConfirm: false
  }

  componentDidMount() {
    this.props.dispatch(fetchBattles())
  }

  handleOpen = BattleID => {
    this.props.dispatch(fetchLogs(BattleID))
    this.setState({open: true, BattleID: BattleID}) 
  }

  handleClose = _ => this.setState({open: false})


  handleConfirmOpen = BattleID => {
    this.setState({openConfirm: true, BattleID: BattleID}) 
  } 

  handleConfirmClose = _ => this.setState({openConfirm: false})

  handleConfirmSave = _ => {
    this.props.dispatch(resetBattle(this.state.BattleID, ))
    this.handleConfirmClose()
  }

  render() {
      console.log('props', this.props)
    return (
      <div>
        <SimpleTable data={this.props.battles} header={header} handleOpen={this.handleOpen} handleReset={this.handleConfirmOpen}></SimpleTable>

        <ModalCustom open={this.state.open} handleClose={this.handleClose} BattleID={this.state.BattleID}/>
        <Confirm open={this.state.openConfirm} handleClose={this.handleConfirmClose} handleConfirm={this.handleConfirmSave}/>
      </div>
    )
  }
}

export default connect(state => state)(Games);