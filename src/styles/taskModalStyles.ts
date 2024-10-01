import { StyleSheet } from 'react-native';
import { MODAL_COLORS } from '../constants/taskModalConstants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: MODAL_COLORS.background,
  },
  modalView: {
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    elevation: 5,
    height: '40%',
    maxHeight: '90%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    borderBottomColor: MODAL_COLORS.inputTextColor,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 18,
    color: MODAL_COLORS.inputTextColor,
    width: '100%',
    borderRadius: 10,
    backgroundColor: MODAL_COLORS.inputBackgroundColor,
  },
  detailsInput: {
    maxHeight: 120,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: MODAL_COLORS.button,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: MODAL_COLORS.inputTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: MODAL_COLORS.closeButton,
  },
});
