import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
// import '../../styles/core.scss'
import '../../styles/style.scss'
// <Header />
export const CoreLayout = ({ children }) => (
  <div style={{height:"100%",width:'100%'}}>
    <div style={{height:"100%"}}  className='core-layout__viewport'>
      {children}
    </div>
  </div>

    

)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
