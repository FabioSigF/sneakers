//Styles
import * as S from './styles';

///Redux Hooks
import { useAppDispatch, useAppSelector } from '../../../redux/store';
//Redux Actions
import { onToggle } from '../../../redux/mobileHeader/slice';


type Props = {}

const Hamburger = (props: Props) => {

  const { isOpen } = useAppSelector(state => state.mobileHeader);
  const dispatch = useAppDispatch();

  return (
    <S.Wrapper
      onClick={() => dispatch(onToggle({}))}
      menuopen={isOpen}
    >
      <div />
    </S.Wrapper>
  )
}

export default Hamburger