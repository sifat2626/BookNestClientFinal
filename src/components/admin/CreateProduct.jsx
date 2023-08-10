import React, { Fragment } from 'react'

const CreateProduct = () => {
    return (
        <Fragment>
            <div class="container-xl mt-2">
                <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Product/</span> Create</h4>
                <div class="row gy-4">
                    <div class="col-xxl">
                        <div class="card mb-4">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <h5 class="mb-0">Create Book</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-name">Title</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="basic-default-name" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-name">Category</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                <option selected disabled>Select Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-name">Author</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                <option selected disabled>Select Author</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-name">Publisher</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                <option selected disabled>Select Publisher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-message">Description</label>
                                        <div class="col-sm-10">
                                            <textarea
                                                id="basic-default-message"
                                                class="form-control"
                                                rows="5"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-price">Original Price</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="basic-default-riginalPrice" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-price">Price</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="basic-default-price" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label" for="basic-default-stock">Stock</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="basic-default-stock" placeholder="" />
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

export default CreateProduct
