import React from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { connect } from "react-redux";
import { getAllIris } from "../../services/IrisService";
import PropTypes from "prop-types";

class BodyComponent extends React.Component {

	componentDidMount() {
		this.props.getAllIris();
	}	

	render() {
		const { irises } = this.props.iris;
		return (
			<div>
				<main role="main">
					<div className="jumbotron">
						<h1 >Iris database&nbsp;
						<a className="btn btn-primary btn-sm" href='https://en.wikipedia.org/wiki/Iris_flower_data_set' role="button">Learn more &raquo;</a></h1>
					</div>
					<div style={{height: 550, width: 1250, margin: 10}} className="ag-theme-alpine">
						<AgGridReact rowData={irises} pagination={true} paginationPageSize={10} >
							<AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
							<AgGridColumn field="species" sortable={true} filter={true}></AgGridColumn>
							<AgGridColumn field="sepalLength" sortable={true} filter={true}></AgGridColumn>
							<AgGridColumn field="sepalWidth" sortable={true} filter={true}></AgGridColumn>
							<AgGridColumn field="petalLength" sortable={true} filter={true}></AgGridColumn>
							<AgGridColumn field="petalWidth" sortable={true} filter={true}></AgGridColumn>
						</AgGridReact>		
					</div>
				</main>
			</div>
		);
	}
}

const IrisRow = ({iris}) => (
	<tr>
		<td>{iris.id}</td>
		<td>{iris.species}</td>
		<td>{iris.sepalLength}</td>
		<td>{iris.sepalWidth}</td>
		<td>{iris.petalLength}</td>
		<td>{iris.petalWidth}</td>
	</tr>
);

BodyComponent.propTypes = {
	iris: PropTypes.object.isRequired,
	getAllIris: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	iris: state.iris
});

export default connect( mapStateToProps, { getAllIris } ) (BodyComponent)