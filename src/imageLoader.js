import logoIcon from './logoIcon.svg';
import folderIcon from './folderIcon.svg';
import addTaskIcon from './addTaskIcon.svg';
import checkCircle from './checkCircleIcon.svg';
import closeIcon from './closeIcon.svg';
import doneIcon from './doneIcon.svg';

export const imageLoader = () => {
    const LogoIcon = () => logoIcon
    const FolderIcon = () => folderIcon
    const AddTaskIcon = () => addTaskIcon
    const CheckCircle = () => checkCircle
    const CloseIcon = () => closeIcon
    const DoneIcon = () => doneIcon
    return {LogoIcon, FolderIcon,AddTaskIcon, CheckCircle, CloseIcon, DoneIcon}
}