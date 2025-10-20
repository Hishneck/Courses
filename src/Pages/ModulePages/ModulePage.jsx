import { Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { useGetModulesQuery } from "../../redux"
import { useState } from "react"


const ModulePage = ()=>{
    const [count, setCount]= useState('')
    const{data=[], isLoading} = useGetModulesQuery(count)
    return(
        <Container
            sx={{
              mt:'2rem',
        }}
        >
            <Grid size ={1} container spacing={2} display={"flex"} justifyContent={"center"}>
              {data.map(item =>(
                <Card key={item.id} sx={{height: 250, width: 250, padding: 2}}>
                  <CardContent sx={{textAlign: "center"}}>
                    <Typography variant="h5" height={100}>{item.title}</Typography>
                    <Typography variant='body1' height={100}>{item.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
        </Container>
    )
}

export {ModulePage}