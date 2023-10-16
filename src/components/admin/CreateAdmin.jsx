import React, { Fragment } from 'react'

const CreateAdmin = () => {
  return (
    <Fragment>
      <div class="container-xl mt-2">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">User/</span> Create Admin</h4>
        <div class="row gy-4">
          <div class="col-xxl">
            <div class="card mb-4">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Add Admin</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-name">Firstame</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="basic-default-name" placeholder="" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-name">Lastname</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="basic-default-name" placeholder="" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-name">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="basic-default-name" placeholder="" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-name">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="basic-default-name" placeholder="" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-message">Address</label>
                    <div class="col-sm-10">
                      <textarea
                        id="basic-default-message"
                        class="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-default-name">Image</label>
                    <div class="col-sm-10">
                      <input type="file" class="form-control" id="basic-default-name" placeholder="John Doe" />
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="col-sm-10">
                      <button type="submit" class="btn app-btn-primary theme-btn">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default CreateAdmin