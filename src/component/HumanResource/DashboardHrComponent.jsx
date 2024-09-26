import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Dropdown, Table, Form, Button, Pagination } from 'react-bootstrap';
import { FaRegUserCircle, FaSort } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FiEdit, FiSearch } from "react-icons/fi";
import { getCandidateDetailsDashboard, getCountCandidate } from '../../services/hrService.js';
import { useNavigate } from 'react-router-dom';
const DashboardHrComponent = () => {

    const [candidateData, setCandidateData] = useState([])
    const navigate = useNavigate()
    const fetchCandidateDetails = async () => {
        try {
            const data = await getCandidateDetailsDashboard()
            console.log("data", data.data.data)
            setCandidateData(data.data.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    const fetchCount = async () => {
        try {
            const data = await getCountCandidate();
            console.log("data-------", data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCandidateData = (applicantId) => {
        console.log("applicantId", applicantId)
        navigate(`/hr-assessment/${applicantId}`)
    }

    useEffect(()=>{
        fetchCandidateDetails()
        fetchCount()
    },[])


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

            <Row className='Dashboard-blocks mb-5'>
                <Col md={8} className='mb-sm-4 mb-md-0'>
                    <Row>
                        <Col>
                            <div className='notstarted-block block-box BlockActive'>
                                <p className='block-box-title'>Not Completed</p>
                                <span className='block-box-value'>30</span>
                                <img className='notstarted' src='./notstarted.gif' alt='notstarted' />
                            </div>
                        </Col>
                        {/* <Col>
                            <div className='progress-block block-box'>
                                <p className='block-box-title'>Work in Progress</p>
                                <span className='block-box-value'>40</span>
                                <img className='progress' src='./progress.gif' alt='progress' />
                            </div>
                        </Col> */}
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

           
            <Row className='mb-4'>
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
                                    <th>Application Id <FaSort className='Sorting' /></th>
                                    <th>Name <FaSort className='Sorting' /></th>
                                    <th>Contact Number <FaSort className='Sorting' /></th>
                                    <th>Date <FaSort className='Sorting' /></th>
                                    <th>E-mail <FaSort className='Sorting' /></th>
                                    <th>Role <FaSort className='Sorting' /></th>
                                    <th>Status <FaSort className='Sorting' /></th>
                                    <th>Action <FaSort className='Sorting' /></th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                candidateData.map((element)=>{
                                    console.log("element", element)
                                    return (<>
                                 <tr>
                                    <td>{element.applicationId}</td>
                                    <td>{element.name}</td>
                                    <td>{element.mobileNumber}</td>
                                    <td>23 Sept 2024</td>
                                    <td>{element.email}</td>
                                    <td>{element.postAppliedFor}</td>
                                    <td><span className='StatusTag notStartedTag'>{element.applicationStatus}</span></td>
                                    <td className='text-center EditCell'><span><FiEdit onClick={e => handleCandidateData(element.applicationId)} /></span></td>
                                </tr>                                    
                                </>)})}
                        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.First className='PageArrow' />
                        <Pagination.Prev className='PageArrow' />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Next className='PageArrow' />
                        <Pagination.Last className='PageArrow' />
                    </Pagination>
                </Col>
            </Row>
            
            
        </>
    );
}

export default DashboardHrComponent;
