"use client"

import { Col, Container, Row } from "react-bootstrap"
import { Pagination, Box, Select, MenuItem, FormControl, InputLabel, Button, TextField } from '@mui/material';
import { useRouter, useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useState } from "react";
import OverflowCard from "../CardOverlay";
export default function MainPage({ info, data, page }) {
    const [Page, SetPage] = useState(page ?? 1)
    const SearchParam = useSearchParams()
    const [Status, SetStatus] = useState(SearchParam.get("status") ? SearchParam.get("status") : "")
    const [Name, SetName] = useState(SearchParam.get("name") ? SearchParam.get("name") : "")

    const { push } = useRouter();

    const handleChange = (event, value) => {
        push(`/page/${value}/${Status == "" ? "" : `/?status=${Status}`}${Name == "" ? "" : `&name=${Name}`}`);

    };
    const handleChangeButton = () => {
        push(`/page/${Page}/${Status == "" ? "" : `/?status=${Status}`}${Name == "" ? "" : `&name=${Name}`}`);

    };
    const UpdateNameChanged = (event) => {
        SetName(event.target.value)
    }
    const SelectedStatusChange = (event) => {
        SetStatus(event.target.value);
    };

    return (<Container >

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column nowrap' }}>
            <FormControl sx={{ m: 1, minWidth: 240 }}>

                <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={Status}
                    label="Status"
                    onChange={SelectedStatusChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"alive"}>alive</MenuItem>
                    <MenuItem value={"dead"}>dead</MenuItem>
                    <MenuItem value={"unknown"}>unknown</MenuItem>
                </Select>
                <TextField value={Name} sx={{ marginTop: '10px' }} onChange={UpdateNameChanged} id="outlined-basic" label="Имя персонажа" variant="outlined" />
                <Button sx={{ marginTop: '10px' }} variant="contained" onClick={handleChangeButton} >Применить</Button>
            </FormControl>

            <Row className="justify-content-center" md={2} xs={1} lg={3}>
                {data?.results?.map((el, ind) => {
                    return (<Col className="m-1" key={ind}>
                        <OverflowCard data={el} />
                    </Col>)
                })}
            </Row>
            <Pagination count={info.pages} defaultPage={Number(Page)} color="primary" shape="rounded" onChange={handleChange} />
        </Box>
        {data?.error && <p>Ошибка данные не найдены</p>}

    </Container>)
}