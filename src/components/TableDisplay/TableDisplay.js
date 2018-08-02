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
import IconButton from '@material-ui/core/IconButton';

// More info:
// https://material-ui.com/demos/tables/

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
  button: {
    margin: theme.spacing.unit,
  },
});

const TableDisplay = ({
  data,

  headers,
  handleDelete,
  // titleKey,
  // dateKey,
  heroText,

  classes,
}) => {
 

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
              handleDelete &&
              <TableCell>handleDelete</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
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
                    handleDelete &&
                    <TableCell>
                      <IconButton className={classes.button} aria-label="Delete">
                        <DeleteIcon
                          onClick={()=>handleDelete(n.id)}
                        />
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func,
  // titleKey: PropTypes.string.isRequired,
  // dateKey: PropTypes.string,
  heroText: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

/**
 * Component props default values
 */
TableDisplay.defaultProps = {
  handleDelete: null,
  heroText: null,
};

export default withStyles(styles)(TableDisplay);
