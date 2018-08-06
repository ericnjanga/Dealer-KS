import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

// More info:
// https://material-ui.com/demos/tables/

const TableDisplay = ({
  data,

  headers,
  presetDelete,
  handleDelete,
  handleEdit,
  heroText,

  classes,
}) => {

  if (!data || !headers) {

    return false;

  }


  return (
    <Paper className={classes.root}>
      {
        heroText &&
        <Typography variant="title" id="tableTitle" className={classes.hero}>
          { heroText }
        </Typography>
      }
          
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              headers.map((title, index) => {
                return (
                  <TableCell key={index}>{title}</TableCell>
                );
              })
            }
            {
              handleEdit &&
              <TableCell className={classes.iconCellHead}>
                <EditIcon />
              </TableCell>
            }
            {
              handleDelete &&
              <TableCell className={classes.iconCellHead}>
                <DeleteIcon />
              </TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {

  // console.log('....datas=', data )
            data.map((n) => {

              return (
                <TableRow key={n.id}>
                  {
                    headers.map((m, ind) => {
                      return (
                        <TableCell key={ind}>{n[m]}</TableCell>
                      );
                    })
                  }


                  {
                    handleEdit &&
                    <TableCell className={classes.iconCell}>
                      <IconButton
                        className={classes.button}
                        aria-label="Edit"
                        onClick={()=> handleEdit(n.id, presetDelete)}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  }

                  
                  {
                    handleDelete &&
                    <TableCell className={classes.iconCell}>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        onClick={()=> handleDelete(n.id, presetDelete)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  }
                </TableRow>
              );
              
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );

};


/**
 * Component props validation
 */
TableDisplay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  headers: PropTypes.arrayOf(PropTypes.string),
  presetDelete: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  // titleKey: PropTypes.string.isRequired,
  // dateKey
  heroText: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

/**
 * Component props default values
 */
TableDisplay.defaultProps = {
  data: null,
  headers: null,
  presetDelete: null,
  handleEdit: null,
  handleDelete: null,
  heroText: null,
};


const styles = theme => ({
  hero: {
    textAlign: 'left',
    padding: '20px',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
  iconCellHead: {
    color: '#878fbf',
    width: '50px',
    paddingLeft: '0!important',
    paddingRight: '0!important',
    textAlign: 'center',
  },
  iconCell: {
    width: '50px',
    paddingLeft: '0!important',
    paddingRight: '0!important',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(TableDisplay);
