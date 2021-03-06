import React, {Component} from 'react';
import {connect} from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {choreActions, choreSelectors} from '../../store/Chores';
import ChoreTile from "../components/Dashboard/Chore/ChoreTile";
import ChoreModal from "../components/Dashboard/Chore/ChoreModal";

class ChoreGrid extends Component {
    render() {
        const {
            chores = [],
            activeChore: { isEditing, activeChore },
            editChore,
            cancelChoreEdit,
            addNewChore,
            createChore,
            updateChore
        } = this.props;

        return (
            <div><GridList cellHeight={180} cols={5}>
                <GridTile key={'new'} titleBackground="">
                    <FlatButton
                        style={{width: 224, height: 180}}
                        backgroundColor='grey'
                        onClick={addNewChore}
                    >
                        <ContentAdd style={{color: 'white'}}/>
                    </FlatButton>
                </GridTile>
                {chores.map((chore, index) => (
                    <ChoreTile
                        index={index}
                        key={chore.id || Math.random()}
                        chore={chore}
                        onClick={(index, chore) => { editChore(index, chore) }}
                    />
                ))}
            </GridList>
                <ChoreModal
                    open={ isEditing }
                    chore={activeChore}
                    handleClose={cancelChoreEdit}
                    handleUpdate={updateChore}
                    handleSave={createChore}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
        chores: choreSelectors.getChores(state),
        activeChore: choreSelectors.getActiveChore(state)
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        addNewChore: () => dispatch(choreActions.addChore()),
        editChore: (index, chore) => dispatch(choreActions.editChore(index, chore)),
        cancelChoreEdit: () => dispatch(choreActions.cancelChoreEdit()),
        updateChore: (index, chore) => dispatch(choreActions.updateChore(index, chore)),
        createChore: (chore) => dispatch(choreActions.createChore(chore)),
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoreGrid)