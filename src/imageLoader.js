import logoIcon from './logoIcon.svg';
import folderIcon from './folderIcon.svg';
import addTaskIcon from './addTaskIcon.svg'
import checkCircle from './checkCircleIcon.svg'
import closeIcon from './closeIcon.svg'

export const imageLoader = () => {
    const LogoIcon = () => logoIcon
    const FolderIcon = () => folderIcon
    const AddTaskIcon = () => addTaskIcon
    const CheckCircle = () => checkCircle
    const CloseIcon = () => closeIcon
    return {LogoIcon, FolderIcon,AddTaskIcon, CheckCircle, CloseIcon}
}