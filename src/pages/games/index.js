import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBattles,
  fetchLogs,
  resetBattle,
  newBattle,
  newAttack,
  addArmy,
  battleInfo
} from "../../store/actions";
import SimpleTable from "../../components/table";
import ModalCustom from "../../components/modal";
import Confirm from "../../components/confirm";
import Button from "@mui/material/Button";
import NewBattle from "../../components/newBattle";
import AddArmy from "../../components/AddArmy";
import Info from "../../components/Info";

class Games extends Component {
  state = {
    open: false,
    BattleID: null,
    openConfirm: false,
    openCreate: false,
  };

  componentDidMount() {
    this.props.dispatch(fetchBattles());
  }

  handleOpen = (BattleID) => {
    this.props.dispatch(fetchLogs(BattleID));
    this.setState({ open: true, BattleID: BattleID });
  };

  handleClose = (_) => this.setState({ open: false });

  handleConfirmOpen = (BattleID) => {
    this.setState({ openConfirm: true, BattleID: BattleID });
  };

  handleConfirmClose = (_) => this.setState({ openConfirm: false });

  handleConfirmSave = (_) => {
    this.props.dispatch(
      resetBattle(this.state.BattleID, "http://localhost:4001/battles")
    );
    this.handleConfirmClose();
  };

  handleNewBatlleClose = (_) => this.setState({ openCreate: false });

  handleNewBatlleOpen = (_) => this.setState({ openCreate: true });

  handleNewBattleSave = (name) => {
    this.props.dispatch(newBattle(name, "http://localhost:4001/battles"));
    this.handleNewBatlleClose();
  };

  handleNewAttack = (BattleID) =>
    this.props.dispatch(newAttack(BattleID, "http://localhost:4001/battles"));

  handleAddArmy = (data) => {
    this.props.dispatch(
      addArmy(
        { ...data, BattleID: this.state.BattleID },
        "http://localhost:4001/battles"
      )
    );
    this.handleAddArmyClose();
  };

  handleAddArmyOpen = (BattleID) => this.setState({ addArmy: true, BattleID });

  handleAddArmyClose = (_) => this.setState({ addArmy: false, BattleID: null });

  handleInfoOpen = (BattleID) => {
    this.props.dispatch(battleInfo(BattleID));
    this.setState({ info: true, BattleID });
  };

  handleInfoClose = (_) => this.setState({ info: false, BattleID: null });

  render() {
    console.log("props", this.props);
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => this.handleNewBatlleOpen()}
          >
            New Battle
          </Button>
        </div>
        <SimpleTable
          data={this.props.battles}
          handleAddArmy={this.handleAddArmyOpen}
          handleOpen={this.handleOpen}
          handleReset={this.handleConfirmOpen}
          handleAttack={this.handleNewAttack}
          handleInfo={this.handleInfoOpen}
        ></SimpleTable>

        <ModalCustom
          open={this.state.open}
          handleClose={this.handleClose}
        />
        <Confirm
          open={this.state.openConfirm}
          handleClose={this.handleConfirmClose}
          handleConfirm={this.handleConfirmSave}
        />
        <NewBattle
          open={this.state.openCreate}
          handleClose={this.handleNewBatlleClose}
          handleConfirm={this.handleNewBattleSave}
        />
        <AddArmy
          open={this.state.addArmy}
          handleClose={this.handleAddArmyClose}
          handleConfirm={this.handleAddArmy}
        />
        <Info
          open={this.state.info}
          handleClose={this.handleInfoClose}
        />
      </div>
    );
  }
}

export default connect((state) => state)(Games);
