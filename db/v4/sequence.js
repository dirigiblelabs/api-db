/*
 * Copyright (c) 2010-2019 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

/**
 * API v4 Sequence
 * 
 * Note: This module is supported only with the Mozilla Rhino engine
 */

exports.nextval = function(sequence, databaseType, datasourceName) {
	var result = -1;
	if (databaseType) {
		if (datasourceName) {
			result = org.eclipse.dirigible.api.v3.db.DatabaseFacade.nextval(sequence, databaseType, datasourceName);
		} else {
			result = org.eclipse.dirigible.api.v3.db.DatabaseFacade.nextval(sequence, databaseType);
		}
	} else {
		result = org.eclipse.dirigible.api.v3.db.DatabaseFacade.nextval(sequence);
	}
	return result;
};

exports.create = function(sequence, databaseType, datasourceName) {
	if (databaseType) {
		if (datasourceName) {
			org.eclipse.dirigible.api.v3.db.DatabaseFacade.createSequence(sequence, databaseType, datasourceName);
		} else {
			org.eclipse.dirigible.api.v3.db.DatabaseFacade.createSequence(sequence, databaseType);
		}
	} else {
		org.eclipse.dirigible.api.v3.db.DatabaseFacade.createSequence(sequence);
	}
};

exports.drop = function(sequence, databaseType, datasourceName) {
	if (databaseType) {
		if (datasourceName) {
			org.eclipse.dirigible.api.v3.db.DatabaseFacade.dropSequence(sequence, databaseType, datasourceName);
		} else {
			org.eclipse.dirigible.api.v3.db.DatabaseFacade.dropSequence(sequence, databaseType);
		}
	} else {
		org.eclipse.dirigible.api.v3.db.DatabaseFacade.dropSequence(sequence);
	}
};
