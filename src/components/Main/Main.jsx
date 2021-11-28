import React, { useState, useEffect, useContext } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core'
import { useSpeechContext } from '@speechly/react-client'
import { ExpenseTrackerContext } from '../../context/context'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import InfoCard from '../InfoCard'
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

const ExpenseTracker = () => {
  const classes = useStyles()
  const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card className={classes.root}>
      <CardHeader title="Expensy - Expense Tracker" subheader="Voice powered Expense Manager!"></CardHeader>
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ₹{balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ExpenseTracker
