import React from 'react'
import './Novosti.css'
import {Link} from 'react-router-dom';

function Novosti() {
  return (
    <div className='Novosti'>
      <div><h2>NOVOSTI</h2></div>
      <div className='novost1'>
        <div className='novNaslov1'><text>NASLOV PRVE NOVOSTI</text></div>
        <div className='novText1'><text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet ultricies tellus quis ultrices. Cras pharetra dapibus leo mattis porta. Mauris at vehicula mi. Sed sed vehicula leo. Phasellus ac sapien id sapien blandit maximus et et magna. Integer elementum pretium auctor. In at aliquet erat, id aliquam sapien. Nulla imperdiet condimentum erat sed molestie. Suspendisse vel imperdiet ipsum. Integer ultricies ligula in massa vehicula, sed lobortis leo finibus. Cras dui mi, imperdiet ac viverra a, consectetur vel metus. Aliquam condimentum, sapien ac venenatis consectetur, velit lacus convallis felis, at mattis nisi tortor sed felis. Nulla sit amet tincidunt lacus. Aliquam faucibus malesuada mauris ut rhoncus. Donec eget ultrices sapien. Suspendisse potenti.</text></div>
      </div>
      <div className='novost2'>
        <div className='novNaslov2'><text>NASLOV DRUGE NOVOSTI</text></div>
        <div className='novText2'><text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet ultricies tellus quis ultrices. Cras pharetra dapibus leo mattis porta. Mauris at vehicula mi. Sed sed vehicula leo. Phasellus ac sapien id sapien blandit maximus et et magna. Integer elementum pretium auctor. In at aliquet erat, id aliquam sapien. Nulla imperdiet condimentum erat sed molestie. Suspendisse vel imperdiet ipsum. Integer ultricies ligula in massa vehicula, sed lobortis leo finibus. Cras dui mi, imperdiet ac viverra a, consectetur vel metus. Aliquam condimentum, sapien ac venenatis consectetur, velit lacus convallis felis, at mattis nisi tortor sed felis. Nulla sit amet tincidunt lacus. Aliquam faucibus malesuada mauris ut rhoncus. Donec eget ultrices sapien. Suspendisse potenti.</text></div>
      </div>
      <div className='novost3'>
        <div className='novNaslov3'><text>NASLOV TRECE NOVOSTI</text></div>
        <div className='novText3'><text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet ultricies tellus quis ultrices. Cras pharetra dapibus leo mattis porta. Mauris at vehicula mi. Sed sed vehicula leo. Phasellus ac sapien id sapien blandit maximus et et magna. Integer elementum pretium auctor. In at aliquet erat, id aliquam sapien. Nulla imperdiet condimentum erat sed molestie. Suspendisse vel imperdiet ipsum. Integer ultricies ligula in massa vehicula, sed lobortis leo finibus. Cras dui mi, imperdiet ac viverra a, consectetur vel metus. Aliquam condimentum, sapien ac venenatis consectetur, velit lacus convallis felis, at mattis nisi tortor sed felis. Nulla sit amet tincidunt lacus. Aliquam faucibus malesuada mauris ut rhoncus. Donec eget ultrices sapien. Suspendisse potenti.</text></div>
      </div>
      <div>
        <h4 className='pN'>
          <Link className='pogledajNovosti' to='/vijesti'>Pogledaj vise novosti</Link>
        </h4>
      </div>
    </div>
  )
}

export default Novosti
