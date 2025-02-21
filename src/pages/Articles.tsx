import React from 'react'
import articles1 from '../images/article-1.jpg';
import articles2 from '../images/article-2.jpg';
import articles3 from '../images/article-3.jpg';
import articles4 from '../images/article-4.jpg';
import articles5 from '../images/article-5.jpg';
import articles6 from '../images/article-6.jpg';

import {
    Card,
    CardActionArea, 
    CardContent, 
    Typography,
  } from "@mui/material";

const ArticlePage: React.FC = () => {

    return (
        <center> 

        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1 style={{ fontSize: '4em' }}>Articles</h1>

            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles1}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: Financial Literacy In Schools Is Improving But More Needs To Be Done
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Article Description: Financial Literacy in Schools Is Improving, But More Needs to Be Done by True Tamplin highlights progress in U.S. financial literacy education, with over half of states now requiring courses for high school graduation. Despite this, many states still lack mandates, creating gaps in education. The article questions if a single semester is enough to teach essential financial skills and advocates for a multigrade approach and lifelong financial education to better prepare individuals for today’s financial challenges
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: Aug 12, 2024
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: Forbes
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.forbes.com/sites/truetamplin/2024/08/12/financial-literacy-in-schools-is-improving-but-more-needs-to-be-done/" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <br></br>
            <br></br>
            <br></br>
            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles2}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: Teaching Kids to Manage Money Yields Big Returns, Research Says
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Article Description: A Champlain College study shows that financial literacy education leads to better long-term financial habits, like budgeting and saving. Despite proven benefits, only seven states require personal finance courses, though more plan to by 2028. The article highlights engaging classroom strategies to teach these essential skills
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: August 20, 2024
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: Edutopia
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.edutopia.org/article/financial-literacy-education-yields-big-returns/" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
 
            <br></br>
            <br></br>
            <br></br>
            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles3}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: Why Financial Literacy is Vitally Important for High School Students
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Article Description: In her article, Alice Stocks emphasizes the critical importance of financial literacy for high school students, highlighting that many are unprepared for the financial responsibilities of independent living. She advocates for integrating Economics and Personal Finance courses into the curriculum to equip students with essential life skills, such as budgeting, saving, and understanding opportunity costs. Stocks shares her classroom experiences, noting that engaging students with relatable concepts fosters better understanding and long-term financial well-being.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: September 24, 2024
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: Virginia Education Association (VEA)
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.veanea.org/why-financial-literacy-is-vitally-important-for-high-school-students/" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <br></br>
            <br></br>
            <br></br>
            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles3}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: Intuit Survey: U.S. High School Students Want Financial Education at School
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A 2024 Intuit survey reveals that 85% of U.S. high school students are interested in learning about financial topics in school, yet many currently rely on parents for financial knowledge. The survey identifies key areas where students feel uninformed, including understanding stocks and bonds, retirement plans, and taxes. In response, Intuit has launched &quot;`, `&ldquo;`, `&#34;`, `&rdquo;Intuit for Education,&quot;`, `&ldquo;`, `&#34;`, `&rdquo; a free program offering interactive financial literacy courses to equip students with essential personal finance skills.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: April 2, 2024
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: Intuit Blog
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.intuit.com/blog/innovative-thinking/intuit-survey/" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <br></br>
            <br></br>
            <br></br>
            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles3}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: More States Now Require Financial Literacy Classes in High School
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The New York Times article titled &quot;Financial Literacy High School Students&quot; discusses the increasing emphasis on financial education in U.S. high schools. It highlights that, as of 2023, 35 states require personal finance courses for graduation, reflecting a growing recognition of the importance of equipping students with financial skills. The piece also contrasts this trend with the situation in the United Kingdom, where financial education is less prevalent, potentially impacting long-term financial literacy and economic engagement.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: December 1, 2023
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: The New York Times
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.nytimes.com/2023/12/01/your-money/financial-literacy-high-school-students.html" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <br></br>
            <br></br>
            <br></br>
            <Card >
                <CardActionArea>
                <center> <img style={{ width: 700, height: 600 }} src={articles3}/></center>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Article Title: Financial Literacy for High School Students
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The article &quot;Financial Literacy for High School Students&quot; from OppU emphasizes the importance of teaching personal finance to teenagers, covering five key concepts: budgeting, informed consumer decision-making, understanding credit and loans, career and income planning, and risk management through insurance. It provides educators with resources, including online tools, apps, and games, to effectively teach these topics. The piece also features expert advice on engaging students in financial education.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Date Posted: October 22, 2024
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine source: Opploans
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Magazine link: <a href="https://www.opploans.com/oppu/financial-literacy/high-school-financial-literacy/" target="popup">Learn more</a>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </center>

        
    )
}

export default ArticlePage
