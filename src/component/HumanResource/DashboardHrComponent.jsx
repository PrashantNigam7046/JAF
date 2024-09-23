import React from 'react';
import {Container, Row, Col, Dropdown, Table, Form, Button } from 'react-bootstrap';
import { FaRegUserCircle, FaSort } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FiEdit, FiSearch } from "react-icons/fi";

const DashboardHrComponent = () => {
    return (
        <>
            {/* <Row>
                <Col>Back</Col>
            </Row> */}
            <Row className='d-flex align-items-center Dashboard-top-info mb-4'>
                <Col className='d-flex flex-column'>
                    <h3 className='Dashboard-userName mb-1'>Welcome Prashant</h3>
                    <h6 className='Dashboard-post m-0'>Senior HR - Radical Minds</h6>
                </Col>
                <Col className='text-end d-flex flex-row-reverse align-items-center'>
                    {/* <div className='Dashboard-user-image'>
                        <FaRegUserCircle />
                    </div> */}
                    <Dropdown className='Dashboard-user-image'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaRegUserCircle />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Logout <IoLogOutOutline /></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h5 className='Dashboard-user-name'>Prashant Nigam</h5>
                </Col>
            </Row>

            <Row className='Dashboard-blocks mb-4'>
                <Col md={8} className='mb-sm-4 mb-md-0'>
                    <Row>
                        <Col>
                            <div className='notstarted-block block-box'>
                                <p className='block-box-title'>Not Started</p>
                                <span className='block-box-value'>30</span>
                                <img className='notstarted' src='./notstarted.gif' alt='notstarted' />
                            </div>
                        </Col>
                        <Col>
                            <div className='progress-block block-box'>
                                <p className='block-box-title'>Work in Progress</p>
                                <span className='block-box-value'>40</span>
                                <img className='progress' src='./progress.gif' alt='progress' />
                            </div>
                        </Col>
                        <Col>
                            <div className='completed-block block-box'>
                                <p className='block-box-title'>Completed</p>
                                <span className='block-box-value'>50</span>
                                <img className='completed' src='./completed.gif' alt='completed' />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className='h-100'>
                        <Col>
                            <div className='feeling-block block-box'>
                                <p className='block-box-title'>How are you feeling today!</p>
                                <Row className='feeling-box'>
                                    <Col className='feeling-box-single d-flex justify-content-center'><img src='./sad.gif' alt='sad'/></Col>
                                    <Col className='feeling-box-single d-flex justify-content-center'><img src='./happy.gif' alt='happy'/></Col>
                                    <Col className='feeling-box-single d-flex justify-content-center'><img src='./Vhappy.gif' alt='Vhappy'/></Col>
                                    <Col className='feeling-box-single d-flex justify-content-center'><img src='./angry.gif' alt='angry'/></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

           
            <Row className='mb-3'>
                <Col>
                    <h4>Job Application  Details</h4>
                </Col>
                <Col className='text-end'>
                    <Form inline  className='text-end'>
                        <Row  className='text-end d-flex flex-row-reverse align-items-center'>
                            {/* <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                />
                            </Col> */}
                            <Col className='text-end d-flex flex-row-reverse align-items-center'>
                                <div className="appDate">
                                    <Form.Control type="date" placeholder="date" />
                                </div>
                                <div class="input-group SearchBox">
                                    <div class="input-group-prepend">
                                        <button id="button-addon5" type="submit" class="btn btn-light"><FiSearch /></button>
                                    </div>
                                    <input type="search" placeholder="Search" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <Table hover className='customTable'>
                        <thead>
                                <tr>
                                    <th>Sr. No <FaSort /></th>
                                    <th>Name <FaSort /></th>
                                    <th>Contact Number <FaSort /></th>
                                    <th>Date <FaSort /></th>
                                    <th>E-mail <FaSort /></th>
                                    <th>Role <FaSort /></th>
                                    <th>Status <FaSort /></th>
                                    <th>Action <FaSort /></th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Prashant Nigam</td>
                                <td>+91 9898989898</td>
                                <td>23 Sept 2024</td>
                                <td>prasahant@gmail.com</td>
                                <td>Software Engineer</td>
                                <td><span className='StatusTag notStartedTag'>Not Started</span></td>
                                <td className='text-center EditCell'><span><FiEdit /></span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Riya Sharma</td>
                                <td>+91 9876543210</td>
                                <td>15 Oct 2024</td>
                                <td>riya.sharma@example.com</td>
                                <td>Data Analyst</td>
                                <td><span className='StatusTag ProgressTag'>In Progress</span></td>
                                <td className='text-center EditCell'><span><FiEdit /></span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Amit Verma</td>
                                <td>+91 9988776655</td>
                                <td>30 Nov 2024</td>
                                <td>amit.verma@mail.com</td>
                                <td>Project Manager</td>
                                <td><span className='StatusTag CompletedTag'>Completed</span></td>
                                <td className='text-center EditCell'><span><FiEdit /></span></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Sneha Patel</td>
                                <td>+91 9123456789</td>
                                <td>5 Dec 2024</td>
                                <td>sneha.patel@example.com</td>
                                <td>UX Designer</td>
                                <td><span className='StatusTag notStartedTag'>Not Started</span></td>
                                <td className='text-center EditCell'><span><FiEdit /></span></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Vikram Singh</td>
                                <td>+91 9654321098</td>
                                <td>12 Jan 2024</td>
                                <td>vikram.singh@mail.com</td>
                                <td>Web Developer</td>
                                <td><span className='StatusTag notStartedTag'>Not Started</span></td>
                                <td className='text-center EditCell'><span><FiEdit /></span></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            
            
        </>
    );
}

export default DashboardHrComponent;
