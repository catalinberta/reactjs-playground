import { Container, useStyles } from './styles';
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DropdownSimple from '@src/modules/UseCallbackAndUseMemo/screens/DropdownSimple';
import DropdownHooks from '@src/modules/UseCallbackAndUseMemo/screens/DropdownHooks';

const UseCallbackAndUseMemoApp = (): React.ReactElement => {
	const classes = useStyles();

	return (
		<Container>
			<Typography variant="h1" color="textPrimary">
				useCallback() && useMemo() <Typography variant="body2">(no, not another counter demo)</Typography>
			</Typography>

			<Grid container justify="center" spacing={4} className={`${classes.gridContainer}`}>
				<Grid item className={`${classes.gridColumn}`}>
					<Paper className={`${classes.paper}`}>
						<DropdownSimple />
					</Paper>
				</Grid>
				<Grid item className={`${classes.gridColumn}`}>
					<Paper className={`${classes.paper}`}>
						<DropdownHooks />
					</Paper>
				</Grid>
			</Grid>
			<Typography className={`${classes.footNote}`} variant="body2">
				(Type name and inspect in console to see render logs so you can compare)
			</Typography>
		</Container>
	);
};

export default UseCallbackAndUseMemoApp;
