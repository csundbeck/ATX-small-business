import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Link
} from '@material-ui/core'
import Add from './Add'
 
const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <Add />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Addresses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><Link>Loro</Link></TableCell>
                        <TableCell>Combining Texan and Asian influences highlighting smoked meats, sides, craft beer and batch cocktails.</TableCell>
                        <TableCell>11AM-10PM</TableCell>
                        <TableCell>2115 South Lamar Blvd. Austin, Texas 78704</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link>Lazarus</Link></TableCell>
                        <TableCell>Cozy brewery for house beers sold only on-premise, plus root beer, kombucha, espresso & house tacos.</TableCell>
                        <TableCell>8AM–10PM</TableCell>
                        <TableCell>1902 E 6th St, Austin, TX 78702</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link>Gourdough's</Link></TableCell>
                        <TableCell>A mind-blowingly weird donut shop.</TableCell>
                        <TableCell>11AM-12AM</TableCell>
                        <TableCell>2700 S Lamar Blvd, Austin TX 78704</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link>Easy Tiger</Link></TableCell>
                        <TableCell>features artisan bread (including baguettes, croissants, pretzels), locally roasted coffee, housemade meats (sausages, corned beef, pastrami), a patio whiskey bar and more than 30 local and boutique draft beers.</TableCell>
                        <TableCell>7AM–8PM</TableCell>
                        <TableCell>6406 N Interstate 35 Frontage Rd Suite 1100, Austin, TX 78752</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link>DeSano Pizzeria Napoletana</Link></TableCell>
                        <TableCell>Neapolitan-style pizza & wood-fired Italian specialties & drinks in a casual cafeteria-style space.</TableCell>
                        <TableCell>11AM-10PM</TableCell>
                        <TableCell>8000 Burnet Rd, Austin, TX 78757</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing