import React, { Fragment } from 'react'
import author from '../../assets/images/team/member-2.jpg'

const AuthorDetailsCard = () => {
    return (
        <Fragment>
            <div class="row text-center d-flex flex-column align-items-center gap-3 py-5">
                <div class="col-lg-3 border">
                    <img src={author} alt="" srcset="" />
                </div>
                <h4 href="#">Rabindranath Tagore</h4>
                <p className='col-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corporis quidem itaque modi ea voluptate ullam magnam esse aspernatur id alias animi ex amet mollitia neque placeat, eaque dolorem numquam!</p>
            </div>
        </Fragment>
    )
}

export default AuthorDetailsCard
