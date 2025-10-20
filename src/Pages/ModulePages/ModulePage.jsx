import { Card, CardContent, CircularProgress, Container, Grid, Typography } from "@mui/material"
import { useGetModulesQuery } from "../../redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ModulePage = ()=>{
    const {courseId} = useParams()
    const [filteredModules, setFilteredModules] = useState([]);
    const [count, setCount]= useState('')
    const{data=[], isLoading} = useGetModulesQuery(count)

    useEffect(() => {      
      if (data.length > 0 && courseId) {
        const filtered = data.filter(module => module.courseId.toString() === courseId);
        setFilteredModules(filtered); 
      } else {
        setFilteredModules([]); // Если нет данных или courseId, показываем пустой массив
      }
    }, [data, courseId]); // Перезапуск при изменении данных или courseId
    return(
        <Container
            sx={{
              mt:'2rem',
        }}
        >
            <Grid size ={1} container spacing={2} display={"flex"} justifyContent={"center"}>
              {filteredModules.map(item =>(
                <Card key={item.id} sx={{height: 250, width: 250, padding: 2}}>
                  <CardContent sx={{textAlign: "center"}}>
                    <Typography variant="h5" height={100}>{item.title}</Typography>
                    <Typography variant='body1' height={100}>{item.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            {/* Сообщения о состоянии */}
            {isLoading && <CircularProgress />}
            {!isLoading && filteredModules.length === 0 && (
              <Typography>Нет модулей для этого курса</Typography>
            )}
        </Container>
    )
}

export {ModulePage}