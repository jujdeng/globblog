import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Hi I'm Julia!</h1>

        <p className="description">
          I'm studying CS at UC Berkeley.
        </p>

        <p>
          My current favorite activity is making granola!
        </p>

        <p>
          Say hi! juliadeng@berkeley.edu
        </p>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
