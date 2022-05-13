import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


interface SnacBarProp {
    open: boolean
    onClose: Function,
    message: string
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const SnackBar = (props: SnacBarProp) => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(() => TransitionDown);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={props.open}
        onClose={() => props.onClose()}
        TransitionComponent={transition}
        message={props.message}
        key={transition ? transition.name : ''}
      />
    </div>
  );
}

export default React.memo(SnackBar)