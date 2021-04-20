import Date from '@/components/date'
import CoverImage from '@/components/cover-image'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';


export default function HeroPost({
index,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  mdAndUp
}) {
  return (

	<>

	{mdAndUp ? (

	<Grid key={ index } container justify="center" style={{padding: "0 20px 24px 20px", color: "#002b80"}} spacing={0}>

		<Grid container alignItems="top" item xs={6} align="left">
			<CoverImage mdAndUp={mdAndUp} title={title} url={coverImage ? coverImage.url : 'assets/images/blog_default_img.png'} slug={slug} />
		</Grid>


		<Grid container style={{padding: "0 12px 12px 12px"}} justify="space-between" direction="column" alignItems="left" item xs={6} align="left">

			<div>
				<div style={{fontFamily: "Merriweather",fontSize: "24px",fontWeight: "700", color: "#002b80"}}>

					<Link as={'/Blog/' + slug} href={"/Blog/" + slug}>

						<a style={{textDecoration: "none",fontSize: "24px",fontWeight: "700", color: "#002b80"}} className="hover:underline">{title}</a>

					</Link>

				</div>

				<div style={{fontFamily: "Muli",fontSize: "18px",fontWeight: "600"}}>{excerpt}
				</div>
			</div>

			<div style={{fontFamily: "Muli",fontSize: "14px",fontWeight: "600", textTransform: "uppercase"}}>
				{date && <Date dateString={date} />}
			</div>

		</Grid>

	</Grid>

	) : (

	<Grid key={ index } container justify="center" style={{padding: "0 20px 24px 20px", color: "#002b80"}} spacing={0}>

		<Grid container alignItems="top" item xs={5} align="left">
			<CoverImage mdAndUp={mdAndUp} title={title} url={coverImage ? coverImage.url : 'assets/images/blog_default_img.png'} slug={slug} />
		</Grid>


		<Grid container style={{padding: "0 12px 12px 12px"}} justify="space-between" direction="column" alignItems="left" item xs={7} align="left">

			<div>
				<div style={{fontFamily: "Merriweather",fontSize: "18px",fontWeight: "700", color: "#002b80"}}>

					<Link as={'/Blog/' + slug} href={"/Blog/" + slug}>

						<a style={{textDecoration: "none",fontSize: "18px",fontWeight: "700", color: "#002b80"}} className="hover:underline">{title}</a>

					</Link>

				</div>

			</div>

			<div style={{fontFamily: "Muli",fontSize: "12px",fontWeight: "600", textTransform: "uppercase"}}>
				{date && <Date dateString={date} />}
			</div>

		</Grid>

	</Grid>

	)}

	</>

  )
}

