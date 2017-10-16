import { connect } from 'react-redux';
import { 
	requestTestCodePlayer, 
	setCodePlayer,
	loadCodePlayerCodeExample,
	clearCodePlayerTestResult, 
	storeCodeEditorCode 
} from './../actions/actions';
import CodeProgram from './../components/developerpage/codeprogram';

const mapStateToProps = (state) => {
	return ({
        codeProgramCode : state.codePlayerCode,
        codeEditorCode : state.codeEditorCode,
        codeProgramStatus : state.codeEditorCodeStatus,
        codeProgramMessage : state.codeEditorMessage
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		onTestButtonClick: code => {
		    dispatch(requestTestCodePlayer(code));
		},
		onAddButtonClick: code => {
		    dispatch(setCodePlayer(code));
		},
		onExampleButtonClick: () => {
			dispatch(loadCodePlayerCodeExample())
		},
		onClearTestResults: () => {
			dispatch(clearCodePlayerTestResult());
		},
		storeCodeEditorCode: code => {
			dispatch(storeCodeEditorCode(code));
		}
	});
}

const CodePlayerCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(CodeProgram);

export default CodePlayerCon;