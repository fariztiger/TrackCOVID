import React from 'react'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CropFree from '@material-ui/icons/CropFree'
import Face from '@material-ui/icons/Face'
import Settings from '@material-ui/icons/Settings'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import CheckpointsPage from './Checkpoints'
import ExposuresPage from './Exposures'
import SettingsPage from './Settings'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTab: 'checkpoints'
    }
  }

  onChangeTab (event, newVal) {
    this.setState({ currentTab: newVal })
  }

  render () {
    const { currentTab } = this.state
    const CurrentPage = (currentTab === 'checkpoints')
      ? CheckpointsPage
      : (currentTab === 'status')
        ? ExposuresPage
        : SettingsPage
    return (
      <div>
        <AppBar position='static' color='secondary'>
          <Container maxWidth='sm' style={{ flexGrow: 1 }}>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' component='h1' style={{ flexGrow: 1 }}>
                COVIDWatch.App
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth='sm'>
          <CurrentPage />
        </Container>
        <BottomNavigation
          value={currentTab}
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0
          }}
          onChange={this.onChangeTab.bind(this)}
          showLabels
        >
          <BottomNavigationAction label='Checkpoints' value='checkpoints' icon={<CropFree />} />
          <BottomNavigationAction label='Status' value='status' icon={<Face />} />
          <BottomNavigationAction label='Settings' value='settings' icon={<Settings />} />
        </BottomNavigation>
      </div>
    )
    // return (
    //   <Container maxWidth='sm'>
    //     <Box my={4}>
    //       <Typography variant='h4' component='h1' gutterBottom>
    //         Create React App v4-beta example
    //       </Typography>
    //       <Copyright />
    //     </Box>
    //   </Container>
    // )
  }
}

export default App
