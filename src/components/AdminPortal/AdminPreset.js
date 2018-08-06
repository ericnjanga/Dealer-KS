import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TableDisplay from './../TableDisplay/TableDisplay.js';
import ManagePreset from './../Item/ManagePreset/ManagePreset.js';


const AdminPreset = ({
  name,
  title,
  active,
  tableData,
  classes,
}) => {

  return(
    active &&
    <Paper className={classes.section} elevation={1}>
      <Typography variant="title" id="tableTitle" className={classes.hero}>
        {title}
      </Typography>
      
      <ManagePreset
        name={name}
      />

      <TableDisplay
        {...tableData}
        // data={dataList}
        // headers={['name']}
        // handleDelete={handleColorDelete}
      />
    </Paper>
  );

}


const styles = theme => ({
  section: {
    position: 'relative',
    marginBottom: '30px',
    ...theme.mixins.gutters(),
    // paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },
});


/**
 * Component props validation
 */
AdminPreset.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPreset.defaultProps = {
  classes: PropTypes.shape({}),
};

export default withStyles(styles)(AdminPreset);
